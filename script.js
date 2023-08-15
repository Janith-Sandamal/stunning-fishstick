document.addEventListener("DOMContentLoaded", function () {
    const patternInput = document.getElementById("pattern");
    const rangeInput = document.getElementById("range");
    const generateButton = document.getElementById("generate");
    const emailList = document.getElementById("email-list");
  
    generateButton.addEventListener("click", function () {
      const pattern = patternInput.value;
      const range = parseInt(rangeInput.value, 10);
      generateRandomEmails(pattern, range);
    });
  
    function generateRandomEmails(pattern, range) {
      emailList.innerHTML = ""; // Clear previous results
      for (let i = 0; i < range; i++) {
        const generatedEmail = generateRandomEmail(pattern);
        const listItem = document.createElement("li");
        listItem.textContent = generatedEmail;
        listItem.addEventListener("click", function () {
          copyToClipboard(generatedEmail);
        });
        emailList.appendChild(listItem);
      }
    }
  
    function generateRandomEmail(pattern) {
      const parts = pattern.split("@");
      if (parts.length !== 2) {
        return "Invalid pattern";
      }
      const username = generateRandomString(8);
      const domain = parts[1];
      return `${username}@${domain}`;
    }
  
    function generateRandomString(length) {
      const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
      let randomString = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
      }
      return randomString;
    }
  
    function copyToClipboard(text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Copied to clipboard: " + text);
    }
  });
  