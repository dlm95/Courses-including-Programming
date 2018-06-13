var gl;
var points;
window.onload = function init(){
    var canvas = document.getElementById( "gl-canvas" );
	var myButton = document.getElementById("PositionButton");
     gl = WebGLUtils.setupWebGL( canvas );    
     if ( !gl ) {
	 alert( "WebGL isn't available" );
	 
	 	document.getElementById("DirectionButton").onclick =
function() { 
var vertices = [  vec2( -1, 0 ),  vec2(  0,  0 ), vec2(  0, -1 ) , 
vec2( 0, 1 ),  vec2(  1, 1  ), vec2(  1, 0 )];
 };
    }        
	


// Three Vertices        
var vertices = [  vec2( -1, 0 ),  vec2(  -1,  -1 ), vec2(  0, -1 ) , 
 vec2( 0, 1 ),  vec2(  0, 0  ), vec2(  1, 0 )];
 
 var colors = [  vec4( 1, 0, 0, 1 ),  vec4(  0,0,1,1 ), vec4(  0, 1,0,1 ) , 
 vec4( 1, 0, 0, 1 ),  vec4(  0, 0, 1, 1 ), vec4(  0,1,0,1 )];
 // r,g,b,a
//  Configure WebGL   
gl.viewport( 100, 100, 300, 300 ); //0, 0, canvas.width, canvas.height
gl.clearColor( 1.0, 0.0, 1.0, 1.0 );  // 1.0, 1.0, 1.0, 1.0
     
//  Load shaders and initialize attribute buffers
var program = initShaders( gl, "vertex-shader", "fragment-shader" );
 gl.useProgram( program );        
// Load the data into the GPU        
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW ); 

// Associate out shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program, "vPosition" );
      gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
      gl.enableVertexAttribArray( vPosition );   


	  var cBuffer = gl.createBuffer();
gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
gl.bufferData( gl.ARRAY_BUFFER, flatten(colors),
                                gl.STATIC_DRAW );

var vColor = gl.getAttribLocation( program, "vColor" );
gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
gl.enableVertexAttribArray( vColor );

      render();
};
function render() {
    gl.clear( gl.COLOR_BUFFER_BIT ); 
    gl.drawArrays( gl.TRIANGLES, 0, 6 );
}   
