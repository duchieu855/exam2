$("document").ready(() => {
	function hideShow() {
		$("#listShow").hide();
		$("#detailShow").hide();
	}
	hideShow();
	$.get(
		"https://8c22c204b3474980b549d26caf5ab0eb.api.mockbin.io/",
		(data, textStatus, xhr) => {
			if (xhr.status === 200) {
				console.log(data);
				$("#list").click(() => {
					hideShow();
					$("#listShow").show();
					$("#sectionList").html("");
					// $("#asideDetail").html("");
					showData(data);
				});
			}
		}
	);

	$.get(
		"https://844deb07bd27403da728d3d434ab3268.api.mockbin.io/",
		(data, textStatus, xhr) => {
			if (xhr.status === 200) {
				console.log(data);
				$("#detail").click(() => {
					hideShow();
					$("#detailShow").show();
					$("#imgBanner").hide();
					const title = document.getElementById("titleDetail");
					title.innerHTML = data.title;
					const content = document.getElementById("contentDetail");
					content.innerHTML = data.content;
					const content2 = document.getElementById("contentDetail2");
					content2.innerHTML = data.content;
					console.log(data.title);
				});
			}
		}
	);
});

function showData(arr) {
	const list = document.getElementById("sectionList");
	console.log(arr);
	const template = `<div class="flex border-b items-center"> <div class="w-[37px] h-[37px] mr-2"><img src="https://viblo.asia/logo_full.svg" /></div> <div> <div> <span>Viblo Announcer</span> <span>$published_at</span> <span>1 phút đọc</span> <span><i class="fa fa-link" aria-hidden="true"></i></span> </div>  <div><p>$title</p> <span class="px-4 bg-blue-400 py-2 rounded">Announcement</span> </div> </div> </div>`;
	arr.forEach((element) => {
		let newElement = template
			.replace("$published_at", element.published_at)
			.replace("$title", element.title);
		// .replace("$price", element.product_price);
		const div = document.createElement("div");
		div.innerHTML = newElement;
		list.appendChild(div);
	});
}
