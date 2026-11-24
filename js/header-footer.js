// 현재 실행 중인 header-footer.js 파일의 실제 전체 주소를 가져옴
// 예: https://github.io
const currentScriptSrc = document.currentScript ? document.currentScript.src : '';

// '/js/' 앞부분까지의 정확한 프로젝트 루트 주소를 추출
// 예: https://github.io
const baseUrl = currentScriptSrc.includes('/js/')
  ? currentScriptSrc.substring(0, currentScriptSrc.lastIndexOf('/js/'))
  : '.';

document.addEventListener('DOMContentLoaded', async () => {
  async function loadComponent(targetId, fileName) {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    try {
      // 추출된 정확한 루트 주소에서 바로 파일을 가져옴
      const response = await fetch(`${baseUrl}/${fileName}`);
      if (response.ok) {
        targetEl.innerHTML = await response.text();
      } else {
        console.error(`${fileName} 로드 실패 (상태코드: ${response.status}):`, `${baseUrl}/${fileName}`);
      }
    } catch (e) {
      console.error(`${fileName} 네트워크 오류:`, e);
    }
  }

  await Promise.all([
    loadComponent('header-placeholder', 'header.html'),
    loadComponent('footer-placeholder', 'footer.html')
  ]);

  // 헤더가 불러와진 후 로고 링크를 정확한 메인 주소로 자동 연결
  const logoLink = document.querySelector('.logo_link');
  if (logoLink) {
    logoLink.href = `${baseUrl}/index.html`;
  }
});
