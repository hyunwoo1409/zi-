document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const arrowButtons = document.getElementById("arrowButtons");
    const upButton = document.getElementById("upButton");
    const downButton = document.getElementById("downButton");
    const closeButton = document.getElementById("closeButton");

    // 플러스 버튼 클릭 시 화살표 버튼
    toggleButton.addEventListener("click", function () {
        arrowButtons.classList.remove("hidden");
        toggleButton.classList.add("hidden");
    });
    closeButton.addEventListener("click", function () {
        arrowButtons.classList.add("hidden");
        toggleButton.classList.remove("hidden");
    });
    
    // 위로 가기 버튼
    upButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // 아래로 가기 버튼
    downButton.addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "auto",
        });
    });

    
    // 채팅 기능
    const chatButton = document.getElementById("chatButton");
    const chatWindow = document.getElementById("chatWindow");
    const closeChatButton = document.getElementById("closeChatButton");
    const sendButton = document.getElementById("sendButton");
    const chatInput = document.getElementById("chatInput");
    const chatBody = document.querySelector(".chat-body");
    
    // 채팅 버튼 클릭 시 채팅창 열기
    chatButton.addEventListener("click", function () {
        chatWindow.classList.remove("hidden");
    });
    
    // 채팅창 닫기 버튼
    closeChatButton.addEventListener("click", function () {
        chatWindow.classList.add("hidden");
    });
    
    // 메시지 전송
    sendButton.addEventListener("click", function () {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement("p");
            messageElement.textContent = message;

            messageElement.classList.add("user-message");
            chatBody.appendChild(messageElement);
            chatInput.value = "";
            chatBody.scrollTop = chatBody.scrollHeight; 
        }
    });
    
    // Enter 키로 메시지 전송
    chatInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
    
});