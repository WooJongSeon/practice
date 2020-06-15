class RfqSearch {
}
class Newest extends RfqSearch {
  get list() {
    return 'newest'
  }
}

class MostQuotation extends RfqSearch {
  get list() {
    return 'most quotation'
  }
}
class LeastQuotation extends RfqSearch {
  get list() {
    return 'least quotation'
  }
}
const queryCase = {
  'Newest': new Newest(),
  'MostQuotation': new MostQuotation(),
  'LeastQuotation': new LeastQuotation(),
}
const rfq = queryCase['MostQuotation'];
if (!rfq) {
  console.log('error');
}
console.log(rfq.list);
