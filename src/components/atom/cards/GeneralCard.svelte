<script>
  export let title = "";
  export let body = "";
  export let principalBadge = "";
  export let badgeOne = "";
  export let badgeTwo = "";
</script>

<div
  class="card bordered w-max bg-white/50 shadow-xl mt-4 max-w-md md:max-w-2xl"
>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      <div class="badge bg-green-300 border-green-600">{principalBadge}</div>
    </h2>
    <p>
      {body}
    </p>
    <div class="card-actions justify-end">
      <div class="badge badge-lg badge-ghost">
        {badgeOne}
      </div>
      <div class="badge badge-lg bg-sky-300 border-sky-600">
        {badgeTwo}
      </div>
    </div>
  </div>
</div>
