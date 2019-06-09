<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link
                tag="button"
                :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }"
                class="btn btn-warning">Back to Users page</router-link>
    </div>
</template>