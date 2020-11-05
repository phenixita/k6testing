  
import encoding from "k6/encoding";
import http from "k6/http";
import { check } from "k6";

export default function() {
    let res = http.get("https://standard-apim.azure-api.net/sessions", { headers: { "Ocp-Apim-Subscription-Key": "f33d2d150f5b4e619e1c0ea10afa514c" }});

    // Verify response
    check(res, {
        "status is 200": (r) => r.status === 200 });
}
