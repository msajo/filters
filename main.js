function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(300,300);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
}
function apply_Filter(){
    tint_color = document.getElementById("color_input").value;
}
function take_snapshot(){
    save("filtered_image.png")
}