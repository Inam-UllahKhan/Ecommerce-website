{// For NanBar
    const mobile_nav = document.querySelector('.mobile-navbar-btn');
    const nav_header = document.querySelector('.header-1')

    mobile_nav.addEventListener('click', () => toggleNavbar());

    function toggleNavbar() {
        // alert("Pleae")
        nav_header.classList.toggle('active');
    };
}




function home() {
    // window.location.reload();
    window.open('index.html', '_self');
};

function contact() {
    window.open('contact.html', '_self');
};

function homeNew() {
    window.open('index.html')
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
};

function viewAll() {
    window.open('portfolio.html', '_self');
};


{   // For Scroll Button
    const scrollBtn = document.querySelector('#scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });
    scrollBtn.addEventListener('click', function scroll() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}





{ // For Slide
    let slides = document.querySelectorAll('.slide-container');
    let index = 0;

    //  next function 
    function next() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active')
    }

    // prev function
    function prev() {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active')
    }

    // setInterval(next, 5000);
    setTimeout(next, 3000);
}




// MESSAGE INPUT
const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')

textarea.addEventListener('input', function () {
    let line = textarea.value.split('\n').length

    if (textarea.rows < 6 || line < 6) {
        textarea.rows = line
    }

    if (textarea.rows > 1) {
        chatboxForm.style.alignItems = 'flex-end'
    } else {
        chatboxForm.style.alignItems = 'center'
    }
})



// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
    chatboxMessage.classList.toggle('show')
})



// DROPDOWN TOGGLE
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', function (e) {
    if (!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
        dropdownMenu.classList.remove('show')
    }
})







// CHATBOX MESSAGE
{
    const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
    const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

    chatboxForm.addEventListener('submit', function (e) {
        e.preventDefault()

        if (isValid(textarea.value)) {
            writeMessage()
            setTimeout(autoReply, 1000)
        }
    })



    function addZero(num) {
        return num < 10 ? '0' + num : num
    }

    function writeMessage() {
        const today = new Date()
        let message = `
    <div class="chatbox-message-item sent">
    <span class="chatbox-message-item-text">
    ${textarea.value.trim().replace(/\n/g, '<br>\n')}
    </span>
    <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
    </div>
	`
        chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
        chatboxForm.style.alignItems = 'center'
        textarea.rows = 1
        textarea.focus()
        textarea.value = ''
        chatboxNoMessage.style.display = 'none'
        scrollBottom()
    }

    function autoReply() {
        const today = new Date()
        let message = `
    <div class="chatbox-message-item received">
    <span class="chatbox-message-item-text">
    Thank you for your awesome support!
    </span>
    <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
    </div>
	`
        chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
        scrollBottom()
    }

    function scrollBottom() {
        chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
    }

    function isValid(value) {
        let text = value.replace(/\n/g, '')
        text = text.replace(/\s/g, '')

        return text.length > 0
    }
}