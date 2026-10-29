class HashMap {
  capacity = 16;
  buckets = Array.from({ length: this.capacity }, () => null);
  loadFactor = 0.75;
}

console.log(new HashMap().buckets);