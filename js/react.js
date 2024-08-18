var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","YouTuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
  {
  
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
      removeBackSection();
      for(let j=0; j<totalNavList; j++)
        {
          if(navList[j].querySelector("a").classList.contains("active"))
            {
              addBackSection(j);
              //allSection[j].classList.add("back-section");
            }
          navList[j].querySelector("a").classList.remove("active");
        }
       this.classList.add("active")
       showSection(this);
       if(window.innerWidth < 1200)
        {
          asideSectionToggleBtn();
        }
    })
  }

function removeBackSection()
{
  for(let i=0; i<totalSection; i++)
    {
      allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num)
{
  allSection[num].classList.add("back-section");
}
function showSection(element)
{
  for(let i=0; i<totalSection; i++)
    {
      allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element)
{
  for(let i=0; i<totalNavList; i++)
    {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
          navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index")
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navToggleBtn = document.querySelector(".nav-toggle"),
aside = document.querySelector(".aside");
  navToggleBtn.addEventListener("click", () => {
    asideSectionToggleBtn();
  })
  function asideSectionToggleBtn()
{
  aside.classList.toggle("open");
  navToggleBtn.classList.toggle("open");
  for(let i=0; i<totalSection; i++)
    {
      allSection[i].classList.toggle("open");
    }
}





const toggleButton = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the active class on the toggle button
  toggleButton.classList.toggle('active');

  // Toggle the display of the menu list
  menuList.classList.toggle('active');
});


window.addEventListener("resize", function() {
  // code to execute when the screen size changes
});

if (window.innerWidth <= 768) {
  // code to execute when the screen width is less than or equal to 768 pixels
}

if (window.innerWidth <= 768) {
  document.querySelector(".nav-toggle").classList.add("show");
} else {
  document.querySelector(".aside").classList.remove("show");
}

document.querySelector(".nav-toggle").addEventListener("click", function() {
  document.querySelector(".aside").classList.toggle("show");
});

window.addEventListener("resize", function() {
  if (window.innerWidth <= 768) {
    document.querySelector(".nav-toggle").classList.add("show");
    document.querySelector(".aside").classList.remove("show");
  } else {
    document.querySelector(".nav-toggle").classList.remove("show");
    document.querySelector(".aside").classList.remove("show");
  }
});

document.querySelector(".nav-toggle").addEventListener("click", function() {
  document.querySelector(".aside").classList.toggle("show");
});


