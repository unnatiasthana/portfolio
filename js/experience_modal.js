// ==========================================================================
// EXPERIENCE POP-OUT MODAL LOGIC (NST & GDG RISHIHOOD)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // --- NST MODAL ELEMENTS ---
  const triggerNst = document.getElementById("open-nst-modal");
  const moreBtnNst = document.getElementById("open-nst-more-btn");
  const modalNst = document.getElementById("nst-experience-modal");
  const backBtnNst = document.getElementById("exp-modal-back-btn");

  // --- GDG MODAL ELEMENTS ---
  const triggerGdsc = document.getElementById("open-gdsc-modal");
  const moreBtnGdsc = document.getElementById("open-gdsc-more-btn");
  const modalGdsc = document.getElementById("gdsc-experience-modal");
  const backBtnGdsc = document.getElementById("gdsc-modal-back-btn");
  const bottomBackBtnGdsc = document.getElementById("gdsc-bottom-back-btn");

  // --- NEC IIT BOMBAY MODAL ELEMENTS ---
  const triggerNec = document.getElementById("open-nec-modal");
  const moreBtnNec = document.getElementById("open-nec-more-btn");
  const modalNec = document.getElementById("nec-experience-modal");
  const backBtnNec = document.getElementById("nec-modal-back-btn");
  const bottomBackBtnNec = document.getElementById("nec-bottom-back-btn");

  function openModal(modalEl, hash) {
    if (!modalEl) return;
    modalEl.classList.add("active");
    document.body.style.overflow = "hidden";
    modalEl.scrollTop = 0;

    if (window.location.hash !== hash) {
      history.pushState({ modalOpen: true, hash: hash }, "", hash);
    }
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove("active");
    document.body.style.overflow = "";

    if (window.location.hash.startsWith("#experience-")) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  function closeAllModals() {
    if (modalNst && modalNst.classList.contains("active")) {
      closeModal(modalNst);
    }
    if (modalGdsc && modalGdsc.classList.contains("active")) {
      closeModal(modalGdsc);
    }
    if (modalNec && modalNec.classList.contains("active")) {
      closeModal(modalNec);
    }
  }

  // --- NST LISTENERS ---
  if (triggerNst) {
    triggerNst.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modalNst, "#experience-nst");
    });
    triggerNst.addEventListener("dblclick", (e) => {
      e.preventDefault();
      openModal(modalNst, "#experience-nst");
    });
    triggerNst.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(modalNst, "#experience-nst");
      }
    });
  }

  if (moreBtnNst) {
    moreBtnNst.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(modalNst, "#experience-nst");
    });
  }

  if (backBtnNst) {
    backBtnNst.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal(modalNst);
    });
  }

  // --- GDSC LISTENERS ---
  if (triggerGdsc) {
    triggerGdsc.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modalGdsc, "#experience-gdsc");
    });
    triggerGdsc.addEventListener("dblclick", (e) => {
      e.preventDefault();
      openModal(modalGdsc, "#experience-gdsc");
    });
    triggerGdsc.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(modalGdsc, "#experience-gdsc");
      }
    });
  }

  if (moreBtnGdsc) {
    moreBtnGdsc.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(modalGdsc, "#experience-gdsc");
    });
  }

  if (backBtnGdsc) {
    backBtnGdsc.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal(modalGdsc);
    });
  }

  if (bottomBackBtnGdsc) {
    bottomBackBtnGdsc.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal(modalGdsc);
    });
  }

  // --- NEC IIT BOMBAY LISTENERS ---
  if (triggerNec) {
    triggerNec.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(modalNec, "#experience-nec");
    });
    triggerNec.addEventListener("dblclick", (e) => {
      e.preventDefault();
      openModal(modalNec, "#experience-nec");
    });
    triggerNec.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(modalNec, "#experience-nec");
      }
    });
  }

  if (moreBtnNec) {
    moreBtnNec.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(modalNec, "#experience-nec");
    });
  }

  if (backBtnNec) {
    backBtnNec.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal(modalNec);
    });
  }

  if (bottomBackBtnNec) {
    bottomBackBtnNec.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal(modalNec);
    });
  }

  // --- GLOBAL CLOSE (Escape & Browser Back) ---
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllModals();
    }
  });

  window.addEventListener("popstate", () => {
    closeAllModals();
  });

  // Handle direct link with hash
  if (window.location.hash === "#experience-nst") {
    openModal(modalNst, "#experience-nst");
  } else if (window.location.hash === "#experience-gdsc") {
    openModal(modalGdsc, "#experience-gdsc");
  } else if (window.location.hash === "#experience-nec") {
    openModal(modalNec, "#experience-nec");
  }
});
