window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    $('.card-header-tabs li').click(function() {
      var tab_id = $(this).index();

      $('.card-header-tabs li').removeClass('is-active');
      $(this).addClass('is-active');

      $('.tab-pane').removeClass('is-active');
      $('.tab-pane').eq(tab_id).addClass('is-active');
    });

    document.getElementById("clickDefault").click();
    // document.getElementById("clickDefaultAny").click();
})

function switchTabAny(evt, selectedTab) {
  // window.alert(selectedTab);
  const tabs = document.getElementById('anyTaskTabs').getElementsByTagName('li');
  const dropdown2 = document.getElementById('dropdown2Any');

  // Reset options in dropdown2
  dropdown2.innerHTML = '';

  // Activate the selected tab
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('is-active');
  }
  // document.getElementById(selectedTab).style.display = "block";
  evt.currentTarget.className += " is-active";

  // Activate the selected tab
  for (let i = 0; i < tabs.length; i++) {
      console.log(tabs[i].classList);
  }
  // Add options to dropdown2 based on the selected tab
  if (selectedTab === 'bag') {
    addOptionsToDropdown([
      { value:'anypoint/bag-train/env_2_overlay.mp4', display: 'pick up the black bag and place it on the shelf' },
      { value:'anypoint/bag-train/env_5_overlay.mp4', display: 'pick up the brown bag and place it on the shelf' },
      { value:'anypoint/bag-train/env_6_overlay.mp4', display: 'pick up the red bag and place it on the shelf' },
      { value:'anypoint/bag-val-l1/env_0_overlay.mp4', display: 'pick up the blue bag and place it on the shelf' },
      { value:'anypoint/bag-val-l1/env_1_overlay.mp4', display: 'pick up the green bag and place it on the shelf' },
    ], dropdown2);
  } else if (selectedTab === 'spatial') {
    addOptionsToDropdown([
      { value: 'anypoint/libero-spatial/env_0_overlay.mp4', display: 'pick up the black bowl between the plate and the ramekin and place it on the plate' },
      { value: 'anypoint/libero-spatial/env_1_overlay.mp4', display: "pick up the black bowl from table center and place it on the plate" },
      { value: 'anypoint/libero-spatial/env_2_overlay.mp4', display: "pick up the black bowl in the top drawer of the wooden cabinet and place it on the plate" },
      { value: 'anypoint/libero-spatial/env_3_overlay.mp4', display: "pick up the black bowl next to the cookie box and place it on the plate" },
      { value: 'anypoint/libero-spatial/env_4_overlay.mp4', display: "pick up the black bowl next to the plate and place it on the plate" },
      { value: 'anypoint/libero-spatial/env_5_overlay.mp4', display: "pick up the black bowl next to the ramekin and place it on the plate" },
      { value: 'anypoint/libero-spatial/env_6_overlay.mp4', display: "pick up the black bowl on the cookie box and place it on the plate" },
      { value: 'anypoint/libero-spatial/env_7_overlay.mp4', display: "pick up the black bowl on the ramekin and place it on the plate" },
      { value: 'anypoint/libero-spatial/env_8_overlay.mp4', display: "pick up the black bowl on the stove and place it on the plate" },
      { value: 'anypoint/libero-spatial/env_9_overlay.mp4', display: "pick up the black bowl on the wooden cabinet and place it on the plate" }
    ], dropdown2);
  } else if (selectedTab === 'object') {
    addOptionsToDropdown([
      { value: 'anypoint/libero-object/env_0_overlay.mp4', display: 'pick up the alphabet soup and place it in the basket' },
      { value: 'anypoint/libero-object/env_1_overlay.mp4', display: 'pick up the bbq sauce and place it in the basket' },
      { value: 'anypoint/libero-object/env_2_overlay.mp4', display: 'pick up the butter and place it in the basket' },
      { value: 'anypoint/libero-object/env_3_overlay.mp4', display: 'pick up the chocolate pudding and place it in the basket' },
      { value: 'anypoint/libero-object/env_4_overlay.mp4', display: 'pick up the cream cheese and place it in the basket' },
      { value: 'anypoint/libero-object/env_5_overlay.mp4', display: 'pick up the ketchup and place it in the basket' },
      { value: 'anypoint/libero-object/env_6_overlay.mp4', display: 'pick up the milk and place it in the basket' },
      { value: 'anypoint/libero-object/env_7_overlay.mp4', display: 'pick up the orange juice and place it in the basket' },
      { value: 'anypoint/libero-object/env_8_overlay.mp4', display: 'pick up the salad dressing and place it in the basket' },
      { value: 'anypoint/libero-object/env_9_overlay.mp4', display: 'pick up the tomato sauce and place it in the basket' },
    ], dropdown2);
  } else if (selectedTab === 'goal') {
    addOptionsToDropdown([
      { value: 'anypoint/libero-goal/env_0_overlay.mp4', display: 'open the middle drawer of the cabinet' },
      { value: 'anypoint/libero-goal/env_1_overlay.mp4', display: 'open the top drawer and put the bowl inside' },
      { value: 'anypoint/libero-goal/env_2_overlay.mp4', display: 'push the plate to the front of the stove' },
      { value: 'anypoint/libero-goal/env_3_overlay.mp4', display: 'put the bowl on the plate' },
      { value: 'anypoint/libero-goal/env_4_overlay.mp4', display: 'put the bowl on the stove' },
      { value: 'anypoint/libero-goal/env_5_overlay.mp4', display: 'put the bowl on top of the cabinet' },
      { value: 'anypoint/libero-goal/env_6_overlay.mp4', display: 'put the cream cheese in the bowl' },
      { value: 'anypoint/libero-goal/env_7_overlay.mp4', display: 'put the wine bottle on the rack' },
      { value: 'anypoint/libero-goal/env_8_overlay.mp4', display: 'put the wine bottle on top of the cabinet' },
      { value: 'anypoint/libero-goal/env_9_overlay.mp4', display: 'turn on the stove' }
    ], dropdown2)
  } else if (selectedTab === 'long') {
    addOptionsToDropdown([
      { value: 'anypoint/libero-long/env_1_overlay.mp4', display: 'put the black bowl in the bottom drawer of the cabinet and close it' },
      { value: 'anypoint/libero-long/env_0_overlay.mp4', display: 'turn on the stove and put the moka pot on it' },
      { value: 'anypoint/libero-long/env_2_overlay.mp4', display: 'put the yellow and white mug in the microwave and close it' },
      { value: 'anypoint/libero-long/env_3_overlay.mp4', display: 'put both moka pots on the stove' },
      { value: 'anypoint/libero-long/env_4_overlay.mp4', display: 'put both the alphabet soup and the cream cheese box in the basket' },
      { value: 'anypoint/libero-long/env_5_overlay.mp4', display: 'put both the alphabet soup and the tomato sauce in the basket' },
      { value: 'anypoint/libero-long/env_6_overlay.mp4', display: 'put both the cream cheese box and the butter in the basket' },
      { value: 'anypoint/libero-long/env_7_overlay.mp4', display: 'put the white mug on the left plate and put the yellow and white mug on the right plate' },
      { value: 'anypoint/libero-long/env_8_overlay.mp4', display: 'put the white mug on the plate and put the chocolate pudding to the right of the plate' },
      { value: 'anypoint/libero-long/env_9_overlay.mp4', display: 'pick up the book and place it in the back compartment of the caddy' }
    ], dropdown2)
  }
  // select the first option in dropdown2
  dropdown2.selectedIndex = 0;
  changeImageAny();
}

function switchTab(evt, selectedTab) {
  // window.alert(selectedTab);
  const tabs = document.getElementById('policyTaskTabs').getElementsByTagName('li');
  const dropdown2 = document.getElementById('dropdown2');

  // Reset options in dropdown2
  dropdown2.innerHTML = '';

  // Activate the selected tab
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('is-active');
  }
  // document.getElementById(selectedTab).style.display = "block";
  evt.currentTarget.className += " is-active";

  // Activate the selected tab
  for (let i = 0; i < tabs.length; i++) {
      console.log(tabs[i].classList);
  }
  // Add options to dropdown2 based on the selected tab
  if (selectedTab === 'wild6d') {
    addOptionsToDropdown([
      { value: 'wild6d-laptop.png', display: "laptop" },
      { value: 'wild6d-camera.png', display: "camera" },
      { value: 'wild6d-mug.png', display: "mug" },
      { value: 'wild6d-bottle.png', display: "bottle" },
      { value: 'wild6d-bowl.png', display: "bowl" },
    ], dropdown2);
  } else if (selectedTab === 'co3d') {
    addOptionsToDropdown([
      { value: 'co3d-motorcycle.png', display: 'motorcycle' },
      { value: 'teaser.png', display: "backpack" },
      { value: 'libero-spatial/env_2.mp4', display: "bicycle" },
      { value: 'libero-spatial/env_3.mp4', display: "teddybear" },
      { value: 'libero-spatial/env_4.mp4', display: "book" },
      { value: 'libero-spatial/env_5.mp4', display: "car" },
      { value: 'libero-spatial/env_6.mp4', display: "chair" },
      { value: 'libero-spatial/env_7.mp4', display: "handbag" },
      { value: 'libero-spatial/env_8.mp4', display: "hydrant" },
      { value: 'libero-spatial/env_9.mp4', display: "keyboard" },
      { value: 'libero-spatial/env_9.mp4', display: "mouse" },
      { value: 'libero-spatial/env_9.mp4', display: "toaster" },
      { value: 'libero-spatial/env_9.mp4', display: "hairdryer" },
      { value: 'libero-spatial/env_9.mp4', display: "laptop" },
      { value: 'libero-spatial/env_9.mp4', display: "remote" },
      { value: 'libero-spatial/env_9.mp4', display: "toilet" },
      { value: 'libero-spatial/env_9.mp4', display: "toybus" },
      { value: 'libero-spatial/env_9.mp4', display: "toyplane" },
      { value: 'libero-spatial/env_9.mp4', display: "toytrain" },
      { value: 'libero-spatial/env_9.mp4', display: "toytruck" }
    ], dropdown2);
  } else if (selectedTab === 'linemod') {
    addOptionsToDropdown([
      { value: 'framework.png', display: 'ape' },
      { value: 'teaser.png', display: 'bench.' },
      { value: 'libero-object/env_2.mp4', display: 'camera' },
      { value: 'libero-object/env_3.mp4', display: 'can' },
      { value: 'libero-object/env_4.mp4', display: 'cat' },
      { value: 'libero-object/env_5.mp4', display: 'driller' },
      { value: 'libero-object/env_6.mp4', display: 'duck' },
      { value: 'libero-object/env_7.mp4', display: 'eggbox' },
      { value: 'libero-object/env_8.mp4', display: 'glue' },
      { value: 'libero-object/env_9.mp4', display: 'holep.' },
      { value: 'libero-object/env_9.mp4', display: 'iron' },
      { value: 'libero-object/env_9.mp4', display: 'lamp' },
      { value: 'libero-object/env_9.mp4', display: 'phone' }
    ], dropdown2);
  } 
  // else if (selectedTab === 'goal') {
  //   addOptionsToDropdown([
  //     { value: 'libero-goal/env_0.mp4', display: 'open the middle drawer of the cabinet' },
  //     { value: 'libero-goal/env_1.mp4', display: 'open the top drawer and put the bowl inside' },
  //     { value: 'libero-goal/env_2.mp4', display: 'push the plate to the front of the stove' },
  //     { value: 'libero-goal/env_3.mp4', display: 'put the bowl on the plate' },
  //     { value: 'libero-goal/env_4.mp4', display: 'put the bowl on the stove' },
  //     { value: 'libero-goal/env_5.mp4', display: 'put the bowl on top of the cabinet' },
  //     { value: 'libero-goal/env_6.mp4', display: 'put the cream cheese in the bowl' },
  //     { value: 'libero-goal/env_7.mp4', display: 'put the wine bottle on the rack' },
  //     { value: 'libero-goal/env_8.mp4', display: 'put the wine bottle on top of the cabinet' },
  //     { value: 'libero-goal/env_9.mp4', display: 'turn on the stove' }
  //   ], dropdown2)
  // } else if (selectedTab === 'long') {
  //   addOptionsToDropdown([
  //     { value: 'libero-long/env_1.mp4', display: 'put the black bowl in the bottom drawer of the cabinet and close it' },
  //     { value: 'libero-long/env_0.mp4', display: 'turn on the stove and put the moka pot on it' },
  //     { value: 'libero-long/env_2.mp4', display: 'put the yellow and white mug in the microwave and close it' },
  //     { value: 'libero-long/env_3.mp4', display: 'put both moka pots on the stove' },
  //     { value: 'libero-long/env_4.mp4', display: 'put both the alphabet soup and the cream cheese box in the basket' },
  //     { value: 'libero-long/env_5.mp4', display: 'put both the alphabet soup and the tomato sauce in the basket' },
  //     { value: 'libero-long/env_6.mp4', display: 'put both the cream cheese box and the butter in the basket' },
  //     { value: 'libero-long/env_7.mp4', display: 'put the white mug on the left plate and put the yellow and white mug on the right plate' },
  //     { value: 'libero-long/env_8.mp4', display: 'put the white mug on the plate and put the chocolate pudding to the right of the plate' },
  //     { value: 'libero-long/env_9.mp4', display: 'pick up the book and place it in the back compartment of the caddy' }
  //   ], dropdown2)
  // }
  // select the first option in dropdown2
  dropdown2.selectedIndex = 0;
  changeImage();
}

// Helper function to add options to dropdown2
function addOptionsToDropdown(options, dropdown) {
  // const dropdown2 = document.getElementById('dropdown2');
  options.forEach(option => {
    const newOption = document.createElement('option');
    newOption.value = option.value;
    newOption.textContent = option.display;
    dropdown.appendChild(newOption);
  });
}

// Function to change the displayed image based on the selected options
function changeImage() {
  const dropdown = document.getElementById('dropdown2');
  const displayedImage = document.getElementById('displayed-image');

  // Check if dropdown2 has a selected value
  if (dropdown.value) {
    // Construct the image filepath based on the selected values
    // const imagePath = `./static/videos/${dropdown.value}`;
    const imagePath = `./static/images/${dropdown.value}`;
    displayedImage.src = imagePath;
  } else {
    // Reset the image source if dropdown2 is not selected
    displayedImage.src = '';
  }
  // if (dropdown.value.includes('real')) {
  //   console.log('real');
  //   // add a class called "real-video" to the displayed image
  //   displayedImage.classList.remove('lib-video');
  //   displayedImage.classList.add('real-video');
  // } else {
  //   console.log('not real');
  //   displayedImage.classList.remove('real-video');
  //   displayedImage.classList.add('lib-video');
  // }
}

function changeImageAny() {
  const dropdown = document.getElementById('dropdown2Any');
  const displayedImage = document.getElementById('displayed-image-any');

  // Check if dropdown2 has a selected value
  if (dropdown.value) {
    // Construct the image filepath based on the selected values
    const imagePath = `./static/videos/${dropdown.value}`;
    displayedImage.src = imagePath;
  } else {
    // Reset the image source if dropdown2 is not selected
    displayedImage.src = '';
  }
}
