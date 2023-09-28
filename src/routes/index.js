const UserRouter = require('./UserRouter');
const BookingRouter = require('./BookingRouter');
// const TourRouter = require('./TourRouter')
const routes = (app) => {
    app.use('/api/user', UserRouter);
    app.use('/api/booking',BookingRouter);
    // app.use('/api/tour',TourRouter);
};

module.exports = routes;