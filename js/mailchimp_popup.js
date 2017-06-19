<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>

<script type="text/javascript">
function showMailingPopUp() {
    require(["mojo/signup-forms/Loader"], function(L){
        L.start({"baseUrl":"mc.us16.list-manage.com","uuid":"0d17aed384fbbc8c0739e835b","lid":"8e7cdd5f11"}) })
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};

document.getElementById("open-popup").onclick = function() {
    showMailingPopUp()
};
</script>
