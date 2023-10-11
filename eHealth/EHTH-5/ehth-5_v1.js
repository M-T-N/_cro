document.querySelector('.hero-content > .container-fluid .medicare-form').innerHTML = `
<div class="row pb-4">
  <div class="col-md-7 col-sm-12 offset-md-1 mt-4 mt-md-5 pb-4">
     <div class="row mb-3">
        <div class="col-md-5 col-sm-12 form-label">
          <h2 class="h5 text-md-right text-center">My ZIP Code:</h2>
        </div>
        <div class="col-md-7 col-10 offset-1 offset-md-0">
           <div class="form-group"><input class="form-control form-control-lg" aria-label="ZIP Code" ></div>
        </div>
     </div>
     <div class="row mb-3">
        <div class="col-md-5 col-sm-12 form-label form-label">
          <h2 class="h5 text-md-right text-center">My Country:</h2>
        </div>
        <div class="col-md-7 col-10 offset-1 offset-md-0">
          <div class="form-group"><input class="form-control form-control-lg" aria-label="country"></div>
        </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-7 offset-md-5 col-10 offset-1">
        <button class="btn btn-secondary_new btn-lg btn-block font-weight-bold" type="submit">
          <span>See Plans Now</span>
        </button>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-12 offset-md-0 col-10 offset-1 text-center">
        <h4>For more relevant results, answer these questions:</h4>
    </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-5 col-sm-12 form-label">
        <h2 class="h5 text-md-right text-center">My Doctor (optional):</h2>
      </div>
      <div class="col-md-7 col-10 offset-1 offset-md-0">
        <div class="form-group"><input class="form-control form-control-lg" aria-label="doctor"></div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-5 col-sm-12 form-label">
        <h2 class="h5 text-md-right text-center">My Rx Drugs (optional):</h2>
      </div>
      <div class="col-md-7 col-10 offset-1 offset-md-0">
        <div class="form-group"><input class="form-control form-control-lg" aria-label="rx"></div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-5 col-sm-12 form-label">
        <h2 class="h5 text-md-right text-center">I'm looking for:</h2>
      </div>
      <div class="col-md-7 col-10 offset-1 offset-md-0">
        <div class="row mb-3">
          <div class="col-12 custom-control custom-radio custom-control-inline">
            <input class="custom-control-input ng-pristine ng-valid ng-touched" formcontrolname="planType" id="planTypeMAPD" name="planType" type="radio" value="MAPD">
            <label class="custom-control-label" for="planTypeMAPD">Medicare Advantage Plans &nbsp;<span class="badge badge-secondary">Popular</span></label>
          </div>
          <div class="col-12 custom-control custom-radio custom-control-inline">
            <input class="custom-control-input ng-pristine ng-valid ng-touched" formcontrolname="planType" id="planTypeMS" name="planType" type="radio" value="MS">
            <label class="custom-control-label" for="planTypeMS"><span class="d-none d-lg-inline-block">Medicare Supplement Plans</span><span class="d-inline-block d-lg-none">Medicare Suppl't Plans</span></label>
          </div>
          <div class="col-12 custom-control custom-radio custom-control-inline">
            <input class="custom-control-input ng-pristine ng-valid ng-touched" formcontrolname="planType" id="planTypeMD" name="planType" type="radio" value="MD">
            <label class="custom-control-label" for="planTypeMD">Prescription Drugs Coverage</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-5 col-sm-12 form-label" style="height: 100%;">
        <h2 class="h5 text-md-right text-center">Have you enrolled in Medicare already? (optional):</h2>
      </div>
      <div class="col-md-7 col-10 offset-1 offset-md-0">
        <div class="row mb-3">
          <div class="col-12 custom-control custom-radio custom-control-inline">
            <input class="custom-control-input ng-pristine ng-valid ng-touched" type="radio">
            <label class="custom-control-label" for="planTypeMAPD">No - I'm new to Medicaid</label>
          </div>
          <div class="col-12 custom-control custom-radio custom-control-inline">
            <input class="custom-control-input ng-pristine ng-valid ng-touched" type="radio">
            <label class="custom-control-label" for="planTypeMAPD">Yes - I have enrolled</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-7 offset-md-5 col-10 offset-1">
        <button class="btn btn-secondary_new btn-lg btn-block font-weight-bold" type="submit">
          <span>See Plans Now</span>
        </button>
      </div>
    </div>
  </div>
  <!-- Right Section (logos) -->
  <div class="col-md-3 col-sm-12 offset-md-1 ">
    <div class="available-plans">
      <h5 class="available-plans__header text-center pt-3">
        There are 23 plans available in your area.
      </h5>
      <div class="available-plans__logos">
        <div _ngcontent-c36="" class="flex-logo ng-star-inserted"><a _ngcontent-c36="" data-wa-link="Click:EHM:Enroll:Carriers:Aetna" href="#"><img _ngcontent-c36="" alt="Aetna Medicare Plans" class="img-fluid"  src="/assets/carriers/svg/aetna.svg" ></a></div>
        <div _ngcontent-c36="" class="flex-logo ng-star-inserted"><a _ngcontent-c36="" data-wa-link="Click:EHM:Enroll:Carriers:Humana" href="#"><img _ngcontent-c36="" alt="Humana Medicare Plans" class="img-fluid"  src="/assets/carriers/svg/humana.svg" ></a></div>
        <div _ngcontent-c36="" class="flex-logo ng-star-inserted"><a _ngcontent-c36="" data-wa-link="Click:EHM:Enroll:Carriers:Anthem Bluecross" href="#"><img _ngcontent-c36="" alt="Anthem Bluecross Medicare Plans" class="img-fluid"  src="/assets/carriers/svg/anthem-bluecross.svg" ></a></div>
        <div _ngcontent-c36="" class="flex-logo ng-star-inserted"><a _ngcontent-c36="" data-wa-link="Click:EHM:Enroll:Carriers:United Healthcare" href="#"><img _ngcontent-c36="" alt="United Healthcare Medicare Plans" class="img-fluid"  src="/assets/carriers/svg/united-healthcare.svg" ></a></div>
        <div _ngcontent-c36="" class="flex-logo ng-star-inserted"><a _ngcontent-c36="" data-wa-link="Click:EHM:Enroll:Carriers:Kaiser Permanente" href="#"><img _ngcontent-c36="" alt="Kaiser Permanente Medicare Plans" class="img-fluid"  src="/assets/carriers/svg/kaiser-permanente.svg" ></a></div>
        <div _ngcontent-c36="" class="flex-logo ng-star-inserted"><a _ngcontent-c36="" data-wa-link="Click:EHM:Enroll:Carriers:Cigna" href="#"><img _ngcontent-c36="" alt="Cigna Medicare Plans" class="img-fluid"  src="/assets/carriers/svg/cigna.svg" ></a></div>
      </div>
    </div>
  </div>
</div>
`;



document.querySelector('head').insertAdjacentHTML('beforeend', `
  <style>
    .form-group {
      margin-bottom: unset;
    }
    .available-plans {
      background: #f3f3f3;
      height: 100%;
      padding: 0 15px;
      color: #3a5eba;
    }
    .available-plans__logos {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .available-plans__logos .flex-logo {
      width: 65%;
    }
  </style>
`);