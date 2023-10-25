const socket = io({
    extraHeaders: {
        header: 1
    }
});

socket.on('connect', () => {
    console.log('connected');

})