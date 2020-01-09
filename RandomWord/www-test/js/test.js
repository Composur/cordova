  const cookie = document.cookie = "cookie 测试"
  sessionStorage.setItem('sessionStorage','sessionStorage')
  localStorage.setItem('localStorage','localStorage')
  const store = {
    session:sessionStorage.getItem('sessionStorage'),
    local:localStorage.getItem('localStorage'),
  }
  test.addEventListener('click',function(){
    panel.innerText = cookie
  },false)
  session.addEventListener('click',function(){
    panel.innerText = store.session
  },false)
  local.addEventListener('click',function(){
    panel.innerText = store.local
  },false)
  $('#jq').on('click',()=>{
    alert(134)
    panel.innerText = 'jquery'
  })