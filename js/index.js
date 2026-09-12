// button clicked color change  by eventListener
document.getElementById('donatation-btn').addEventListener('click',function(){
  const colorChange1 = document.getElementById('history-btn');
  colorChange1.classList.add('bg-white]','text-gray-500');
  colorChange1.classList.remove('bg-[#B4F461]','text-black');
  const colorChange2 = document.getElementById('donatation-btn');
  colorChange2.classList.add('bg-[#B4F461]');
  colorChange2.classList.remove('bg-white','text-gray-500')
})

document.getElementById('history-btn').addEventListener('click',function(){
   const colorChange = document.getElementById('donatation-btn');
  colorChange.classList.add('bg-white','border','text-gray-500');
  const addColor = document.getElementById('history-btn');
  addColor.classList.add('bg-[#B4F461]','text-black');
  addColor.classList.remove('bg-white')
})