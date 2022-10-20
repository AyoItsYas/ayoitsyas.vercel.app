function handler(request, response) {
    response.status(200);
    response.json({ message: "Pong!" });
};

export default handler;
