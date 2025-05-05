document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value.trim().replace(/[^0-9]/g, "");
  const message = encodeURIComponent(document.getElementById("message").value.trim());
  
  if (!phone) return alert("Please enter a valid phone number.");

  const link = `https://wa.me/${phone}${message ? `?text=${message}` : ""}`;

  document.getElementById("whatsappLink").href = link;
  document.getElementById("linkText").textContent = link;
  document.getElementById("output").style.display = "block";
});

function copyLink() {
  const linkText = document.getElementById("linkText").textContent;
  navigator.clipboard.writeText(linkText).then(() => {
    alert("Link copied to clipboard!");
  });
}
