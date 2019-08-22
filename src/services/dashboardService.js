import apiUtils from '../utils/apiUtils'

export default {
  getDhashboard (params) {
    return apiUtils().get('/wordwise/entries?limit=1&headword=' + params.word)
  }
}
