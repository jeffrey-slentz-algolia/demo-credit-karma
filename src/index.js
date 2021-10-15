import "./styles.css";

const searchClient = algoliasearch(
  "TFI9OD8HM6",
  "321ef0fca2df8af9402c500968d81afa"
);

const search = instantsearch({
  indexName: "crawler_Credit Karma Mortgage Reviews - Demo",
  searchClient
});

// Create the render function
const renderHits = (renderOptions, isFirstRender) => {
  const { hits, widgetParams } = renderOptions;

  widgetParams.container.innerHTML = `
    <ul>
      ${hits
        .map(
          (item) =>
            `			
          	<div ck-card="">
		<div class="singleItemBlock">
			<div class="singleReviewBlock">
							<div class="singleReviewBlock-left reviewImageBorder">
									<a href="https://www.creditkarma.com/reviews/mortgage/single/id/zions-bank-mortgages">
																					<img src="${
                                            item.image
                                          }" alt="" width="110" height="70">                                    </a>
							</div>
							<div class="singleReviewBlock-center">
									<h3 class="prodTitle" ck-header="sub"><a href="https://www.creditkarma.com/reviews/mortgage/single/id/zions-bank-mortgages">${
                    instantsearch.highlight({
                      attribute: "titleAlternate",
                      hit: item
                    })
                      ? instantsearch.highlight({
                          attribute: "titleAlternate",
                          hit: item
                        })
                      : item.title
                  }</a></h3>
									
									<div class="reviewLinks" ck-text="light">
											<strong>${item.score ? item.score : item.stars.slice(0, 3)} Stars </strong>
											<span class="separator"> | </span>
											<a href="https://www.creditkarma.com/reviews/mortgage/single/id/zions-bank-mortgages">
													<strong>${
                            item.numReviews ? item.numReviews : "No"
                          }</strong> Reviews                    </a>
											<span class="separator">|</span>
											<a href="https://www.creditkarma.com/reviews/mortgage/oingle/id/zions-bank-mortgages#commentHeader" class="bold">Write a Review</a>
									</div>
	
							</div>
											<div class="singleReviewBlock-right" cf="">
									<a ck-button=" blue caps" href="https://www.creditkarma.com/reviews/mortgage/single/id/zions-bank-mortgages">
											Read Reviews
									</a>
							</div>
											</div>
			<div cf=""></div>
			</div>
	<div cf=""></div>
	</div>
    `
        )
        .join("")}
    </ul>
  `;
};

// Create the custom widget
const customHits = instantsearch.connectors.connectHits(renderHits);

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox"
  }),
  customHits({
    container: document.querySelector("#hits")
  }),
  instantsearch.widgets.stats({
    container: "#stats"
  }),
  instantsearch.widgets.pagination({
    container: "#pagination"
  }),
  instantsearch.widgets.poweredBy({
    container: "#powered-by"
  }),
  instantsearch.widgets.rangeSlider({
    container: "#star-slider",
    attribute: "score",
    precision: 4,
    step: 15,
    pips: false
  }),
  instantsearch.widgets.sortBy({
    container: "#sort-by",
    items: [
      {
        label: "Freshness",
        value: "crawler_Credit Karma Mortgage Reviews - Demo"
      },
      {
        label: "Number of Reviews (desc)",
        value: "crawler_Credit Karma Mortgage Reviews - Demo_num_reviews_desc"
      },
      {
        label: "Score (desc)",
        value: "crawler_Credit Karma Mortgage Reviews - Demo_score_desc"
      }
    ]
  })
]);

search.start();

//crawler_Credit Karma Mortgage Reviews - Demo_score_desc
