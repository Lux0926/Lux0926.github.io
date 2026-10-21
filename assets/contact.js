(() => {
  const emailButton = document.getElementById("email-contact");

  emailButton.addEventListener("click", () => {
    const emailUser = encodeURIComponent(emailButton.dataset.emailUser);
    const emailDomain = encodeURIComponent(emailButton.dataset.emailDomain);
    window.location.href = `mailto:${emailUser}@${emailDomain}`;
  });
})();
