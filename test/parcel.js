function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  let deliveryLoad = 0;
  let pickupLoad = 0;

  for (let i = n - 1; i >= 0; i--) {
    deliveryLoad += deliveries[i];
    pickupLoad += pickups[i];

    while (deliveryLoad > 0 || pickupLoad > 0) {
      deliveryLoad -= cap;
      pickupLoad -= cap;
      answer += (i + 1) * 2;
    }
  }

  return answer;
}
