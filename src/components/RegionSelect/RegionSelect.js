//add a continent region selection
import React from "react";

import { StyledRegionFilter, Wrapper } from "./styles";

export default function RegionSelect({filterByRegion}) {
    const region = ["Africa", "America", "Asia", "Europe", "Oceania"]
    return(
        <Wrapper>
            <form>
                <label classNmae= "sr-only" htmlFor="region-filter">
                   Filter by region:
                </label>
                <StyledRegionFilter
                 onChange={filterByRegion}
                 id="region-filter"
                 name="region-filter"
                 >
                <option value="">filter by region</option>
                {region.map(region=>(
                  <option key={region} value={region}>
                     {region}
                  </option>
                ))}
                </StyledRegionFilter>
            </form>
            
        </Wrapper>

    )
}