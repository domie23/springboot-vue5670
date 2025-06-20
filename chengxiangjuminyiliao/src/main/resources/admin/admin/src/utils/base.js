const base = {
    get() {
        return {
            url : "http://localhost:8080/chengxiangjuminyiliao/",
            name: "chengxiangjuminyiliao",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chengxiangjuminyiliao/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "城乡居民基本医疗信息管理系统"
        } 
    }
}
export default base
