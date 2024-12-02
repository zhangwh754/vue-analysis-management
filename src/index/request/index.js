import request from './request'

export async function getSurveyListData(query = {}) {
  return request.post('/survey', query)
}

export async function getSurveyDetail(data) {
  return request.post('/survey', data)
}
