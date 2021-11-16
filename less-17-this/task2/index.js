export const callbackPromt = {
  message: 'give your number',
  showPromt(){
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms){
    setTimeout(this.showPromt.bind(this), ms);
  }
};

callbackPromt.showDeferredPrompt(3000);