const errorHandler = (error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message })
  }

  res.status(500).json({ message: 'Something went wrong!' })
}

module.exports = errorHandler
