const redirectUser = () => {
    const appleDevices = /Macintosh|iPhone|iPad|iPod/i;
    const isAppleDevice = navigator.userAgent.match(appleDevices);
    const location = isAppleDevice ? "v/apple" : "v/default";
    document.location.href = location;
};

redirectUser();
