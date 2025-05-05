document.getElementById('waForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const config = {
    buttonName: document.getElementById('buttonName').value,
    buttonIconSize: parseInt(document.getElementById('buttonIconSize').value),
    brandImageUrl: document.getElementById('brandImageUrl').value,
    brandName: document.getElementById('brandName').value,
    brandSubtitleText: document.getElementById('brandSubtitleText').value,
    buttonSize: document.getElementById('buttonSize').value,
    buttonPosition: document.getElementById('buttonPosition').value,
    callToAction: document.getElementById('callToAction').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    welcomeMessage: document.getElementById('welcomeMessage').value,
    prefillMessage: document.getElementById('prefillMessage').value,
    baseUrl: 'https://cdn.jsdelivr.net/gh/trysetter/button-generator-0001@main'
  };

  const jsonString = JSON.stringify(config, null, 2);

  const output = `<!-- WA Button START/ -->
<script>
  window._whatsappConfig = ${jsonString};
</script>
<script src="https://cdn.jsdelivr.net/gh/trysetter/button-generator-0001@main/embed.js" async></script>
<!-- WA Button END/ -->`;

  document.getElementById('outputCode').value = output;
  document.getElementById('result').style.display = 'block';
});

function copyScript() {
  const textarea = document.getElementById('outputCode');
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Code copied to clipboard!');
}
