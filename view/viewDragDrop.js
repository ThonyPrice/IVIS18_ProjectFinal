var createDragDropTable = function(id, influencedTargetsInfo, targetsNum){
	var idName = "table"+id.toString().replace(".", "");
	$("#columns").append(`
		<div id="${idName}">
			<table class="table table-bordered bg-light m-0">
				<thead>
			  	<tr class="text-light h4 m-0" style="background-color: #7A7A79;">
			  	  <th class="text-left style="width:90%">${id+" : "+jsonList.Name}</th>
			  	  <th class="text-center" style="width:10%">
			  	  	<button type="button" class="btn rounded" style="background-color: #61DADA"><b>DOWNLOAD</b></button
			  	  </th>
			  	</tr>
			  	</thead>
			</table>
			<table class="table table-bordered text-center bg-light p-2">
			  <thead>
			  	<tr>
			  		<th colspan="7">
			  	  	<div class="stacked-bar-graph" id="barChart${idName}">
			        	<span class='neg-bar-1'></span>
				        <span class='neg-bar-2'></span>
				        <span class='neg-bar-3'></span>

				        <span class='neu-bar'></span>

				        <span class='pos-bar-1'></span>
				        <span class='pos-bar-2'></span>
				        <span class='pos-bar-3'></span>
			        </div>
			  	  </th>
			  	</tr>
			  	<tr>
			      <th scope="col">-3</th>
			      <th scope="col">-2</th>
			      <th scope="col">-1</th>
			      <th scope="col">0</th>
			      <th scope="col">1</th>
			      <th scope="col">2</th>
			      <th scope="col">3</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td class="dropPlace value-3 class${idName}" ondrop="handleDrop(event)" ondragover="handleDragOver(event)">
			      	<div class="container">

				    </div>
			      </td>
			      <td class="dropPlace value-2 class${idName}" ondrop="handleDrop(event)" ondragover="handleDragOver(event)">
			      	<div class="container">

				    </div>
			      </td>
			      <td class="dropPlace value-1 class${idName}" ondrop="handleDrop(event)" ondragover="handleDragOver(event)">
			      	<div class="container">

				    </div>
			      </td>
			      <td class="dropPlace value0 class${idName}"  ondrop="handleDrop(event)" ondragover="handleDragOver(event)">
			      	<div class="container">

				    </div>
			      </td>
			      <td class="dropPlace value1 class${idName}"  ondrop="handleDrop(event)" ondragover="handleDragOver(event)">
			      	<div class="container">

				    </div>
			      </td>
			      <td class="dropPlace value2 class${idName}"  ondrop="handleDrop(event)" ondragover="handleDragOver(event)">
			      	<div class="container">

				    </div>
			      </td>
			      <td class="dropPlace value3 class${idName}"  ondrop="handleDrop(event)" ondragover="handleDragOver(event)">
			      	<div class="container">

				    </div>
			      </td>
			    </tr>
			  </tbody>
			</table>
		</div>
	      `);
	Object.keys(influencedTargetsInfo).forEach(function(value){
		$("#"+idName).find("td.value"+value+" > .container").empty();
		colorBar(idName, value,influencedTargetsInfo[value].length, targetsNum/100);
		influencedTargetsInfo[value].forEach(function(target){
			$("#"+idName).find("td.value"+value+" > .container").append(dragDropTarget(target, idName));
		})
	})

	dragDropAddListeners(idName);
}

var dragDropTarget = function(targetInfo, idName){
	// need to put reason
	return `<div class="column m-1 class${idName}" draggable="true">${targetInfo}</div>`
}

var colorBar = function(idName, colorValue, value, targetsNum){
	if(value == 0) return;
		switch(colorValue.toString()){
			case "-3":
				$("#barChart"+idName+" > .neg-bar-1").css("width", value/targetsNum+"%");
				$("#barChart"+idName+" > .neg-bar-1").text(value);
				break;
			case "-2":
				$("#barChart"+idName+" > .neg-bar-2").css("width", value/targetsNum+"%");
				$("#barChart"+idName+" > .neg-bar-2").text(value);
				break;
			case "-1":
				$("#barChart"+idName+" > .neg-bar-3").css("width", value/targetsNum+"%");
				$("#barChart"+idName+" > .neg-bar-3").text(value);
				break;
			case "0":
				$("#barChart"+idName+" > .neu-bar").css("width", value/targetsNum+"%");
				$("#barChart"+idName+" > .neu-bar").text(value);
				break;
			case "1":
				$("#barChart"+idName+" > .pos-bar-1").css("width", value/targetsNum+"%");
				$("#barChart"+idName+" > .pos-bar-1").text(value);
				break;
			case "2":
				$("#barChart"+idName+" > .pos-bar-2").css("width", value/targetsNum+"%");
				$("#barChart"+idName+" > .pos-bar-2").text(value);
				break;
			case "3":
				$("#barChart"+idName+" > .pos-bar-3").css("width", value/targetsNum+"%");
				$("#barChart"+idName+" > .pos-bar-3").text(value);
				break;
	}
}
