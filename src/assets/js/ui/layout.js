console.log('layout');

const scrollHeader = () => {
  let preScrollTop = 0;
  window.addEventListener('scroll', () => {
    let nextScrollTop = window.scrollY;
    const toolbarStyle = document.querySelector('.toolbar-layout');
    
    if(document.querySelectorAll('.toolbar-layout').length > 0) {
      // 스크롤 방향에 따라 툴바 숨기기/보이기 결정
      if (nextScrollTop > preScrollTop) {
        toolbarStyle.classList.add('hide');
      } else {
        toolbarStyle.classList.remove('hide');
      }
      
      // 페이지 맨 상단 또는 맨 하단에 위치할 때 툴바 보이기
      if (nextScrollTop <= 0 || nextScrollTop > (document.documentElement.scrollHeight - window.innerHeight - 100)) {
        toolbarStyle.classList.remove('hide');
      }

      // 현재 스크롤 위치를 이전 스크롤 위치로 업데이트
      preScrollTop = nextScrollTop;
    }
  });
}

scrollHeader();