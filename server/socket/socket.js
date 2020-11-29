const socketToUsers = new Map();
const usersToSockets = new Map();
const rooms = {};
module.exports = (server) => {
  const io = require('socket.io')(server, { origins: '*:*', path: '/sockets' });
  io.on('connection', (socket) => {
    const { id } = socket;
    console.log('LOGGED IN! SOCKET ID', socket.id);

    socket.on('check_rooms', ({ userId }) => {
      console.log(userId);
    });

    socket.on('get_partner_name', ({ firstName, lastName, roomId }) => {
      socket.broadcast
        .to(roomId)
        .emit('set_partner_name', { firstName, lastName });
    });

    socket.on('start_interview', (roomId) => {
      socket.broadcast.to(roomId).emit('join_interview_room');
      console.log('STARTING INTERVIEW, ROOMS @ ROOMID: ', {
        users: rooms[roomId],
      });
    });

    socket.on('create_room', ({ user, roomId }) => {
      if (rooms[roomId]) {
        if (Object.keys(rooms[roomId]).length < 2) {
          console.log('joining room: ', roomId);

          rooms[roomId][user._id] = user;
          socket.roomId = roomId;
          socket.join(roomId);
        } else {
          // room is full
          io.to(socket.id).emit('room_full', null);
        }
      } else {
        const userId = user._id;
        user.isOwner = true;
        rooms[roomId] = {
          [user._id]: user,
        };
        socket.roomId = roomId;
        console.log('joining room: ', roomId);
        socket.join(roomId);
      }
      io.to(roomId).emit('lobby_users', {
        users: Object.values(rooms[roomId]),
      });
    });

    socket.on('leave_room', ({ userId, roomId }) => {
      // delete rooms[roomId][userId];
      socket.leave(roomId);
      console.log('leaving room: ', roomId);
      console.log(userId);
    });

    socket.on('code_result', (codeResult) => {
      socket.broadcast.to(socket.roomId).emit('result_code', codeResult);
    });

    socket.on('change_text', (code) => {
      socket.broadcast.to(socket.roomId).emit('new_content', code);
    });

    socket.on('change_language', (language) => {
      socket.broadcast.to(socket.roomId).emit('language_change', language);
    });

    socket.on('new_cursor_position', ({ lineNumber, column }) => {
      socket.broadcast
        .to(socket.roomId)
        .emit('updated_position', { lineNumber, column });
    });

    socket.on('logged_in', (userId) => {
      socket.userId = userId;
      usersToSockets[userId] = id;
      socketToUsers[id] = userId;
    });

    socket.on('logged_out', () => {
      delete usersToSockets[socket.userId];
      delete socketToUsers[id];
    });

    socket.on('disconnect', () => {
      delete usersToSockets[id];
      delete socketToUsers[socket.userId];
      console.log(`User ${id} disconnected`);
    });
  });
  return io;
};
