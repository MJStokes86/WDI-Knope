// var circles;

Array.prototype.sample = function() {
	var index = Math.floor(this.length * Math.random())
	var el = this[index];
	return el

}

function sample(array){
	var index = Math.floor(this.length * Math.random())
	var el = this[index];
	return el
};

function projectData(data){
	// var svg = document.querySelector('svg');
	// $('svg');

	var svg = d3.select('svg');

	var circles = svg.selectAll('circle')
					 .data(data)
				     .enter()
					 .append('circle')

	var circlesAgain = svg.selectAll('circle')
							.data(data)
							.transition()
							.duration(600)
							.ease("bounce")
							.attr('r', function(d){return d * 10 + 'px'})
							.attr('cx', function(d,i){return Math.random() * 90 + '%'})
							.attr('cy', function(d,i){return Math.random() * 90 + '%'})
							.style('fill', function(){return crayola.sample().hex})
							.style('opacity', '.6')
							


		svg.selectAll('circle')
			.data(data)
			.exit()
			.remove()

};


window.onload = function(){



// what we would eventually like
// 
setInterval(function(){
	var array = [
	Math.ceil(Math.random() * 12),
	Math.ceil(Math.random() * 12),
	Math.ceil(Math.random() * 12),
	Math.ceil(Math.random() * 12),
	Math.ceil(Math.random() * 12),
	Math.ceil(Math.random() * 12),
	Math.ceil(Math.random() * 12),
	Math.ceil(Math.random() * 12),
	Math.ceil(Math.random() * 12),



	]

	projectData(array);

}, 700)


};