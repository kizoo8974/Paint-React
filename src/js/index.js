
class DrawingBoard {
    MODE = "NONE"; //NONE BRUSH ERASER
    IsMouseDown = false; // true false
    constructor() {
        this.assignElement();
        this.initContext();
        this.addEvent();
    }

        assignElement() {
            this.containerEl = document.getElementById("container");
            this.canvasEl = this.containerEl.querySelector("#canvas");
            this.toolbarEl = this.containerEl.querySelector("#toolbar");
            this.brushEl = this.toolbarEl.querySelector("#brush");

        }
        initContext() {
            this.context = this.canvasEl.getContext("2d")
        }
        addEvent() {
            this.brushEl.addEventListener("click", this.onClickBrush.bind(this));
            this.canvasEl.addEventListener("mousedown", this.onMouseDown.bind(this));
        }

        onMouseDown(event) {
            if(this.MODE === "NONE") return;
            this.IsMouseDown = true;
            const currentPosition = this.getMousePosition(event);

        }

        getMousePosition(event){
            const boundaries = this.canvasEl.getBoundingClientRect();
            return {
                x: event.clientX - boundaries.left,
                y: event.clientY - boundaries.top,
            };
        }

        onClickBrush(event){
            const IsActive = event.currentTarget.classList.contains("active") 
            this.MODE = IsActive
            ? "NONE" 
            : "BRUSH";
            this.canvasEl.style.cursor = IsActive
            ? "default"
            : "crosshair";
            this.brushEl.classList.toggle("active");
        }
    
}

new DrawingBoard();