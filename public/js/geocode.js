
  async function getLocation(event) {
    event.preventDefault(); // stop form from submitting immediately

    const form = event.target.closest('form');
    
    // Check HTML5 form validation
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      alert('Please fill in all required fields');
      return;
    }

    // Validate price is present and positive
    const priceInput = document.querySelector('input[name="listing[price]"]');
    if (!priceInput || !priceInput.value || parseFloat(priceInput.value) <= 0) {
      alert("Price is required and must be greater than 0");
      return;
    }

    const address = document.querySelector('input[name="listing[location]"]').value;
    const country = document.querySelector('input[name="listing[country]"]').value;
    

    const fullAddress = `${address} ${country}`;

    console.log('Geocoding:', { fullAddress, mapToken });

    // If no mapToken, submit directly without geocoding
    if (typeof mapToken === 'undefined' || !mapToken) {
      console.warn('mapToken missing — submitting form directly');
      form.submit();
      return;
    }

    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(fullAddress)}&format=json&apiKey=${mapToken}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        const place = data.results[0];

        document.getElementById("lat").value = place.lat;
        document.getElementById("lon").value = place.lon;

        console.log("Lat:", place.lat, "Lon:", place.lon);

        // Now submit the form manually
        form.submit();
      } else {
        alert("Location not found. Please enter a valid address.");
      }

    } catch (err) {
      console.error("Geoapify error:", err);
      alert("Error getting location. Submitting without geocoding.");
      form.submit();
    }
  }

