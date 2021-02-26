(() => {
  const toggleModal = () => {
    const $btnList = [...document.querySelectorAll('.hero__btn')];
    const $modal = document.getElementById('question');
    const $btnBack = document.getElementById('questionBack');
    if (!$btnList.length && !$modal) return;

    $btnList.forEach(($btn) => {
      $btn.addEventListener('click', (e) => {
        e.preventDefault();
        $modal.classList.add('active');
      });
    });

    $btnBack.addEventListener('click', (e) => {
      e.preventDefault();
      $modal.classList.remove('active');
    });
  };

  const activeDarkModal = () => {
    const $btnList = [...document.querySelectorAll('.question__box-no-btn')];
    const $modal = document.getElementById('darkBoxModal');
    if (!$btnList.length && !$modal) return;

    $btnList.forEach(($btn) => {
      $btn.addEventListener('click', (e) => {
        e.preventDefault();
        $modal.classList.add('active');
      });
    });
  };

  const activeLightModal = () => {
    const $modal = document.getElementById('lightBoxModal');
    const $form = document.getElementById('form');
    if (!$modal && !$form) return;

    $form.addEventListener('submit', (e) => {
      e.preventDefault();
      $modal.classList.add('active');
    });
  };

  toggleModal();
  activeDarkModal();
  activeLightModal();
})();
