/* eslint-disable jest/expect-expect */
/* utils 모듈에서 fetchBooks를 추출해 비동기 처리 코드를 작성하세요. -------------------------------- */

// 데이터 패치를 위한 유틸리티 코드를 Promise로 작성
const fetchData = (endpoint, shouldReject = false, timeout = 2000) => {
  const data = [
    {
      id: 'udi-1',
      name: '유디 원',
    },
    {
      id: 'udi-2',
      name: '유디 더블유',
    },
  ];

  // Promise를 생성 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject({
          message: '오류(ERROR)가 발생되었습니다.',
        });
      } else {
        resolve(data);
      }
    }, timeout);
  });
};

// 데이터 패치 성공 시뮬레이션 코드 예시
test('fetchBooks Promise 테스트', () => {
  return fetchData()
    .then((response) => {
      expect(response.length).toBeLessThan(10);
    })
    .catch((error) => {
      expect(error.message).toMatch(/오류|발생/);
    });
});

// 데이터 패치 실패 시뮬레이션 코드 예시
test('fetchBooks Async 함수 테스트', async () => {
  try {
    const response = await fetchData(null, true, 3000);
    expect(response[0].id).toBe('uid-1');
  } catch (error) {
    expect(error.message).toMatch(/ERROR/);
  }
});
