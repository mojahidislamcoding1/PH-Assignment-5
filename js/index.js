function toggleButtonState(activeBtn, inactiveBtn) {
  // ১. একটিভ বাটনে প্রয়োজনীয় কালার যোগ করা ও আগেরগুলো সরানো
  activeBtn.classList.add("bg-[#B4F461]", "text-black");
  activeBtn.classList.remove("bg-white", "text-gray-500", "border");

  // ২. ইনঅ্যাক্টিভ বাটনে ডিফল্ট কালার যোগ করা ও একটিভ কালার সরানো
  inactiveBtn.classList.add("bg-white", "text-gray-500", "border");
  inactiveBtn.classList.remove("bg-[#B4F461]", "text-black");
}

// সেকশন হাইড/শো করার Utility Function
function toggleSection(showSection, hideSection) { 
  showSection.classList.remove("hidden");
  hideSection.classList.add("hidden");
}

const donateBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");

const donateSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

// Donation বাটনে ক্লিক করলে
donateBtn.addEventListener("click", function () {
  toggleButtonState(donateBtn, historyBtn);
  toggleSection(donateSection, historySection);
});

// History বাটনে ক্লিক করলে

historyBtn.addEventListener("click", function () {
  toggleButtonState(historyBtn, donateBtn);
  toggleSection(historySection, donateSection);
});


// input filed er value 
function GetInputValueById(id){
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}

// main balance ba innerText er value
function GetInnerTextById(id){
  const innerText = document.getElementById(id).innerText;
  const innerTextNumber = parseFloat(innerText.replace('BDT',''));
  return innerTextNumber;

}

// donate for noakhali  button clicked 
document.getElementById('NoakhaliDonate-btn').addEventListener('click',function(event){
  event.preventDefault();
  const donateMoney = GetInputValueById('NoakhaliDonate-amount');
  const mainBalance = GetInnerTextById('mainAmount');
  const NoakhaliAmount = GetInnerTextById('Noakhali-fund');

  if( !isNaN(donateMoney) && donateMoney > 0 ){
  const NewMainBalance = donateMoney + mainBalance;
  const NoakhaliNewAmount = donateMoney + NoakhaliAmount;
  
  document.getElementById('mainAmount').innerText = NewMainBalance + 'BDT';
  document.getElementById('Noakhali-fund').innerText = NoakhaliNewAmount + 'BDT';
  

  const currentDate = new Date();
  const div = document.createElement('div');
  div.classList.add('border', 'px-6', 'py-7', 'rounded-lg');
  div.innerHTML = `
    <h2 class="font-bold text-xl"> ${donateMoney} Taka is Donated for Flood  at Noakhali,Bangladesh.</h2>
     <p class="text-[#595959]"> ${currentDate}</p>
  `
  document.getElementById('history-section').prepend(div);

const modal = document.getElementById('success_modal');
    if (modal) {
      modal.showModal();
    }

  // ঘ) ইনপুট ফিল্ড খালি করা
    document.getElementById('NoakhaliDonate-amount').value = '';

  }
else{
  alert('Please Enter Positive Number')
}
})


