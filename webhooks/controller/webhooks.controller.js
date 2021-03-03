

exports.createFreeSomaUser = (req, res) => {
    console.log({req})
    return res.status(200).json({
        status: 'success',
        data: 'hello'
      });
}