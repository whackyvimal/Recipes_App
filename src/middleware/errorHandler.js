module.exports = (err, req, res, next) => {
console.error(err);
const statusCode = err.statusCode || 500;
const message = err.message || 'Server Error';
res.status(statusCode).json({ success: false, message });
};