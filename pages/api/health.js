export default (req, res) => {
  if (req.method === 'GET') {
    return res.send({
      success: true,
      message: 'This API is healty!'
    });
  }
}
