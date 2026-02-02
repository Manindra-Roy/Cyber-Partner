let contentSection = document.querySelector(".content-section");
function loadHome() {
  contentSection.innerHTML = `
    <div class="logo-wraper">
        <div class="logo">C<div></div><span>S</span> <div></div> C</div>
    </div>`;
}
function loadCscServices() {
  contentSection.innerHTML = `
    <a href="https://digitalseva.csc.gov.in/" target="_blank" class="card" style="background-image: url(/public/images/csc-services/csc-login.jpeg);">CSC Login</a>
    <a href="https://register.csc.gov.in/" target="_blank" class="card" style="background-image: url(/public/images/csc-services/csc-reg.jpeg);">CSC Reg</a>`;
}
function loadStateGovtServices() {
  contentSection.innerHTML = `

    <a href="https://edistrict.wb.gov.in/portal/home/" target="_blank" class="card" style="background-image: url(/public/images/state-services/e-district.jpeg);">E-District</a>
    <a href="https://food.wb.gov.in/" target="_blank" class="card" style="background-image: url(/public/images/state-services/rasion-card.jpeg);">Rasion</a>
    <a href="https://wbpds.wb.gov.in/(S(4kstbtskcr1hfpdrlgjwwjt2))/Benificiary_Deatils_Update_by_Aadhaar.aspx" target="_blank" class="card" style="background-image: url(/public/images/state-services/rasion-card.jpeg);">Rasion Rectify</a>
    <a href="https://wbpds.wb.gov.in/(S(lonmuc5bmb0iypht5kei41l2))/E_Card_Download.aspx" target="_blank" class="card" style="background-image: url(/public/images/state-services/rasion-card.jpeg);">Rasion Download</a>
    <a href="https://wbpms.in/citizen/" target="_blank" class="card" style="background-image: url(/public/images/state-services/gp.jpeg);">Citizen Corner</a>
    <a href="https://janma-mrityutathya.wb.gov.in/" target="_blank" class="card" style="background-image: url(/public/images/state-services/birth-c.jpeg);">Birth Certificate</a>
    <a href="https://sarathi.parivahan.gov.in/sarathiservice/stateSelection.do" target="_blank" class="card" style="background-image: url(/public/images/state-services/state-dl.jpeg);">WB LL</a>
    <a href="https://pcc.wb.gov.in/" target="_blank" class="card" style="background-image: url(/public/images/state-services/wb-pcc.jpeg);">PCC</a>
    <a href="https://anumodan.wb.gov.in/" target="_blank" class="card" style="background-image: url(/public/images/state-services/wb-da.jpeg);">Driver Auth</a>
    <a href=" https://socialsecurity.wb.gov.in/login/" target="_blank" class="card" style="background-image: url(/public/images/state-services/lbh.jpeg);">Lakshmi Bhandar</a>`;
}
function loadCentralGovtServices() {
  contentSection.innerHTML = `
    <a href="https://myaadhaaruidaiinfo.com/" target="_blank" class="card" style="background-image: url(/public/images/central-services/my-aadhar.jpeg);">My Aadhar</a>
    <a href="https://voters.eci.gov.in/" target="_blank" class="card" style="background-image: url(/public/images/central-services/voter.jpeg);">Voter</a>
    <a href="https://www.onlineservices.proteantech.in/paam/endUserRegisterContact.html" target="_blank" class="card" style="background-image: url(/public/images/central-services/nsdl.jpeg);">NSDL</a>
    <a href="https://www.onlineservices.proteantech.in/paam/requestAndDownloadEPAN.html" target="_blank" class="card" style="background-image: url(/public/images/central-services/nsdl.jpeg);">E-Pan</a>
    <a href="https://tin.tin.proteantech.in/pantan/StatusTrack.html" target="_blank" class="card" style="background-image: url(/public/images/central-services/nsdl.jpeg);">Pan Status</a>
    <a href="https://www.onlineservices.proteantech.in/paam/endUserRegisterContact.html" target="_blank" class="card" style="background-image: url(/public/images/central-services/nsdl.jpeg);">Correction</a>
    <a href="https://www.pan.utiitsl.com/" target="_blank" class="card" style="background-image: url(/public/images/central-services/uti.jpeg);">UTIITSL Pan</a>
    <a href="https://www.incometax.gov.in/iec/foportal/" target="_blank" class="card" style="background-image: url(/public/images/central-services/income-tax.jpeg);">Income Tax</a>`;
}
function loadStateSchalarshipServices() {
  contentSection.innerHTML = `
    <a href="https://svmcm.wb.gov.in/" target="_blank" class="card" style="background-image: url(/public/images/state-schalarship/scmc.jpeg);">SVMCM</a>
    <a href="https://oasis.gov.in/" target="_blank" class="card" style="background-image: url(/public/images/state-schalarship/oasis.jpeg);">Oasis</a>`;
}
function loadCentralSchalarshipServices() {
  contentSection.innerHTML = `
    <a href="https://ssc.gov.in/home/apply" target="_blank" class="card" style="background-image: url(/public/images/central-jobs/ssc-gd.jpeg);">SSC GD</a>
    <a href="https://ssc.gov.in/for-candidates/cgl-exam/xsd91hjkshdk92xk" target="_blank" class="card" style="background-image: url(/public/images/central-jobs/ssc-cgl.jpeg);">SSC CGL</a>
    <a href="https://ksb.gov.in/" target="_blank" class="card" style="background-image: url(/public/images/central-jobs/ksb.jpeg);">KSB Shhalarship</a>
    <a href=" https://examinationservices.nic.in/recsys2025/root/Home.aspx?enc=Ei4cajBkK1gZSfgr53ImFbEsl0hvvhEEwgxfU0IzC28jtU4yhpqb3pomlo4g+VC8" target="_blank" class="card" style="background-image: url(/public/images/central-jobs/kvs.jpeg);">KVS</a>`;
}

