const moment = require('moment');

class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.ietms = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }
  get readableDate() {
    // return this.date.toLocaleDateString('eb-EN', {
    //   year: 'numeric',
    //   month: 'long',
    //   date: 'numeric',
    //   hour: '2-digit',
    //   minute: '2-digit'
    // });
    return moment(this.date).format('Do MMMM YYYY, hh:mm');
  }
}

export default Order;
