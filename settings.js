var formValue = document.forms.formsettings;
var formData = new formData(formValue);
var time = formData.get("timer");

localStorage.setItem('gameTime', time);