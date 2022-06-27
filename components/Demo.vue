<template>
    <Space direction="vertical" :size="30" class="demo">
        <Space direction="vertical" type="flex">
            <Alert>{{ msg }}</Alert>
            <Input v-model="msg" />
        </Space>
        <Space>
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
        </Space>
        <Space>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
        </Space>
    </Space>
</template>

<script setup>
    import { ref } from 'vue';
    
    const msg = ref('Hello, View UI Plus!');
</script>

<style lang="less" scoped>
    .demo {
        margin: 20px;
    }
</style>
