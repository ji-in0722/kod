document.addEventListener('DOMContentLoaded', async () => {
  // 공통 파일을 불러오는 함수
  async function loadComponent(targetId, fileName) {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    const paths = [`./${fileName}`, `../${fileName}`, `../../${fileName}`,  `../../../${fileName}`, `../../../../${fileName}`,`/${fileName}`];

    for (const path of paths) {
      try {
        const response = await fetch(path);
        if (response.ok) {
          targetEl.innerHTML = await response.text();
          break;
        }
      } catch (e) {}
    }
  }

  // 헤더와 푸터 동시에 불러오기
  await Promise.all([
    loadComponent('header-placeholder', 'header.html'),
    loadComponent('footer-placeholder', 'footer.html')
  ]);
});