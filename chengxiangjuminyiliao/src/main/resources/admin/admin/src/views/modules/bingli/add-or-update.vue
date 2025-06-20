<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="auto"
                >
            <el-row>
                <el-col :span="12"  v-if="sessionTable !='bingren'">
                    <el-form-item class="select" v-if="type!='info'"  label="病人" prop="bingrenId">
                        <el-select v-model="ruleForm.bingrenId" :disabled="ro.bingrenId" filterable placeholder="请选择病人" @change="bingrenChange">
                            <el-option
                                    v-for="(item,index) in bingrenOptions"
                                    v-bind:key="item.id"
                                    :label="item.bingrenName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='bingren' ">
                    <el-form-item class="input" v-if="type!='info'"  label="看护人姓名" prop="kanhurenName">
                        <el-input v-model="bingrenForm.kanhurenName"
                                  placeholder="看护人姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="看护人姓名" prop="kanhurenName">
                            <el-input v-model="ruleForm.kanhurenName"
                                      placeholder="看护人姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='bingren' ">
                    <el-form-item class="input" v-if="type!='info'"  label="看护人联系方式" prop="kanhurenPhone">
                        <el-input v-model="bingrenForm.kanhurenPhone"
                                  placeholder="看护人联系方式" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="看护人联系方式" prop="kanhurenPhone">
                            <el-input v-model="ruleForm.kanhurenPhone"
                                      placeholder="看护人联系方式" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='bingren' ">
                    <el-form-item class="input" v-if="type!='info'"  label="病人姓名" prop="bingrenName">
                        <el-input v-model="bingrenForm.bingrenName"
                                  placeholder="病人姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="病人姓名" prop="bingrenName">
                            <el-input v-model="ruleForm.bingrenName"
                                      placeholder="病人姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='bingren' ">
                    <el-form-item class="input" v-if="type!='info'"  label="病人手机号" prop="bingrenPhone">
                        <el-input v-model="bingrenForm.bingrenPhone"
                                  placeholder="病人手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="病人手机号" prop="bingrenPhone">
                            <el-input v-model="ruleForm.bingrenPhone"
                                      placeholder="病人手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='bingren' ">
                    <el-form-item class="input" v-if="type!='info'"  label="病人身份证号" prop="bingrenIdNumber">
                        <el-input v-model="bingrenForm.bingrenIdNumber"
                                  placeholder="病人身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="病人身份证号" prop="bingrenIdNumber">
                            <el-input v-model="ruleForm.bingrenIdNumber"
                                      placeholder="病人身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='bingren' ">
                    <el-form-item class="input" v-if="type!='info'"  label="性别" prop="sexValue">
                        <el-input v-model="bingrenForm.sexValue"
                                  placeholder="性别" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="性别" prop="sexValue">
                            <el-input v-model="ruleForm.sexValue"
                                      placeholder="性别" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='bingren' ">
                    <el-form-item class="input" v-if="type!='info'"  label="病人类型" prop="bingrenValue">
                        <el-input v-model="bingrenForm.bingrenValue"
                                  placeholder="病人类型" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="病人类型" prop="bingrenValue">
                            <el-input v-model="ruleForm.bingrenValue"
                                      placeholder="病人类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='bingren' ">
                    <el-form-item class="input" v-if="type!='info'"  label="年龄" prop="age">
                        <el-input v-model="bingrenForm.age"
                                  placeholder="年龄" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="年龄" prop="age">
                            <el-input v-model="ruleForm.age"
                                      placeholder="年龄" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='bingren' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.bingrenPhoto" label="病人照片" prop="bingrenPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (bingrenForm.bingrenPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.bingrenPhoto" label="病人照片" prop="bingrenPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.bingrenPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yisheng'">
                    <el-form-item class="select" v-if="type!='info'"  label="医生" prop="yishengId">
                        <el-select v-model="ruleForm.yishengId" :disabled="ro.yishengId" filterable placeholder="请选择医生" @change="yishengChange">
                            <el-option
                                    v-for="(item,index) in yishengOptions"
                                    v-bind:key="item.id"
                                    :label="item.yishengName"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12"  v-if="sessionTable !='yisheng' ">
                    <el-form-item class="input" v-if="type!='info'"  label="医生姓名" prop="yishengName">
                        <el-input v-model="yishengForm.yishengName"
                                  placeholder="医生姓名" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="医生姓名" prop="yishengName">
                            <el-input v-model="ruleForm.yishengName"
                                      placeholder="医生姓名" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yisheng' ">
                    <el-form-item class="input" v-if="type!='info'"  label="医生手机号" prop="yishengPhone">
                        <el-input v-model="yishengForm.yishengPhone"
                                  placeholder="医生手机号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="医生手机号" prop="yishengPhone">
                            <el-input v-model="ruleForm.yishengPhone"
                                      placeholder="医生手机号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yisheng' ">
                    <el-form-item class="input" v-if="type!='info'"  label="医生身份证号" prop="yishengIdNumber">
                        <el-input v-model="yishengForm.yishengIdNumber"
                                  placeholder="医生身份证号" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="医生身份证号" prop="yishengIdNumber">
                            <el-input v-model="ruleForm.yishengIdNumber"
                                      placeholder="医生身份证号" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12" v-if="sessionTable !='yisheng' ">
                    <el-form-item class="upload" v-if="type!='info' && !ro.yishengPhoto" label="医生头像" prop="yishengPhoto">
                        <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (yishengForm.yishengPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.yishengPhoto" label="医生头像" prop="yishengPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.yishengPhoto || '').split(',')" :src="$base.url+item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yisheng' ">
                    <el-form-item class="input" v-if="type!='info'"  label="坐诊时间" prop="zuozhenShijian">
                        <el-input v-model="yishengForm.zuozhenShijian"
                                  placeholder="坐诊时间" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="坐诊时间" prop="zuozhenShijian">
                            <el-input v-model="ruleForm.zuozhenShijian"
                                      placeholder="坐诊时间" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yisheng' ">
                    <el-form-item class="input" v-if="type!='info'"  label="挂号金额" prop="guahaojine">
                        <el-input v-model="yishengForm.guahaojine"
                                  placeholder="挂号金额" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="挂号金额" prop="guahaojine">
                            <el-input v-model="ruleForm.guahaojine"
                                      placeholder="挂号金额" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yisheng' ">
                    <el-form-item class="input" v-if="type!='info'"  label="每天挂号数量" prop="guahaoshuliang">
                        <el-input v-model="yishengForm.guahaoshuliang"
                                  placeholder="每天挂号数量" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="每天挂号数量" prop="guahaoshuliang">
                            <el-input v-model="ruleForm.guahaoshuliang"
                                      placeholder="每天挂号数量" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yisheng' ">
                    <el-form-item class="input" v-if="type!='info'"  label="科室" prop="keshiValue">
                        <el-input v-model="yishengForm.keshiValue"
                                  placeholder="科室" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="科室" prop="keshiValue">
                            <el-input v-model="ruleForm.keshiValue"
                                      placeholder="科室" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yisheng' ">
                    <el-form-item class="input" v-if="type!='info'"  label="职位" prop="zhiweiValue">
                        <el-input v-model="yishengForm.zhiweiValue"
                                  placeholder="职位" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="职位" prop="zhiweiValue">
                            <el-input v-model="ruleForm.zhiweiValue"
                                      placeholder="职位" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12"  v-if="sessionTable !='yisheng' ">
                    <el-form-item class="input" v-if="type!='info'"  label="医生邮箱" prop="yishengEmail">
                        <el-input v-model="yishengForm.yishengEmail"
                                  placeholder="医生邮箱" clearable readonly></el-input>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="医生邮箱" prop="yishengEmail">
                            <el-input v-model="ruleForm.yishengEmail"
                                      placeholder="医生邮箱" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <input id="updateId" name="id" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="病例编号" prop="bingliUuidNumber">
                       <el-input v-model="ruleForm.bingliUuidNumber"
                                 placeholder="病例编号" clearable  :readonly="ro.bingliUuidNumber"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="病例编号" prop="bingliUuidNumber">
                           <el-input v-model="ruleForm.bingliUuidNumber"
                                     placeholder="病例编号" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
            <input id="bingrenId" name="bingrenId" type="hidden">
            <input id="yishengId" name="yishengId" type="hidden">
                <el-col :span="12">
                    <el-form-item v-if="type!='info'"  class="input" label="检查时间" prop="jianchaTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.jianchaTime"
                                type="datetime"
                                placeholder="检查时间"
                                :disabled="ro.jianchaTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.jianchaTime" label="检查时间" prop="jianchaTime">
                            <span v-html="ruleForm.jianchaTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="病人自述" prop="bingrenzishuContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.bingrenzishuContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.bingrenzishuContent" label="病人自述" prop="bingrenzishuContent">
                            <span v-html="ruleForm.bingrenzishuContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="检查结果" prop="jianchajieguoContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.jianchajieguoContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.jianchajieguoContent" label="检查结果" prop="jianchajieguoContent">
                            <span v-html="ruleForm.jianchajieguoContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="医生开方" prop="yishengkaifangContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.yishengkaifangContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.yishengkaifangContent" label="医生开方" prop="yishengkaifangContent">
                            <span v-html="ruleForm.yishengkaifangContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="医生建议" prop="yishengjianyiContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.yishengjianyiContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.yishengjianyiContent" label="医生建议" prop="yishengjianyiContent">
                            <span v-html="ruleForm.yishengjianyiContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="花费金额" prop="huafeijine">
                       <el-input v-model="ruleForm.huafeijine"
                                 placeholder="花费金额" clearable  :readonly="ro.huafeijine"></el-input>
                   </el-form-item>
                   <div v-else-if="type=='info'">
                       <el-form-item class="input" label="花费金额" prop="huafeijine">
                           <el-input v-model="ruleForm.huafeijine"
                                     placeholder="花费金额" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item v-if="type!='info'"  class="input" label="下次就诊时间" prop="xiacijiuzhenTime">
                        <el-date-picker
                                value-format="yyyy-MM-dd HH:mm:ss"
                                v-model="ruleForm.xiacijiuzhenTime"
                                type="datetime"
                                placeholder="下次就诊时间"
                                :disabled="ro.xiacijiuzhenTime">
                        </el-date-picker>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item v-if="ruleForm.xiacijiuzhenTime" label="下次就诊时间" prop="xiacijiuzhenTime">
                            <span v-html="ruleForm.xiacijiuzhenTime"></span>
                        </el-form-item>
                    </div>
                </el-col>

                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info' && sessionTable!='yisheng'"  label="状态" prop="bingliTypes">
                        <el-select v-model="ruleForm.bingliTypes" :disabled="ro.bingliTypes" placeholder="请选择状态">
                            <el-option
                                v-for="(item,index) in bingliTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else-if="type=='info'">
                        <el-form-item class="input" label="状态" prop="bingliValue">
                        <el-input v-model="ruleForm.bingliValue"
                            placeholder="状态" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    import utilsJs, {getYearFormat,getMonthFormat,getDateFormat,getDatetimeFormat} from "../../../utils/utils.js";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                bingrenForm: {},
                yishengForm: {},
                ro:{
                    bingliUuidNumber: false,
                    bingrenId: false,
                    yishengId: false,
                    jianchaTime: false,
                    bingrenzishuContent: false,
                    jianchajieguoContent: false,
                    yishengkaifangContent: false,
                    yishengjianyiContent: false,
                    huafeijine: false,
                    xiacijiuzhenTime: false,
                    bingliTypes: false,
                    insertTime: false,
                },
                ruleForm: {
                    bingliUuidNumber: new Date().getTime(),
                    bingrenId: '',
                    yishengId: '',
                    jianchaTime: '',
                    bingrenzishuContent: '',
                    jianchajieguoContent: '',
                    yishengkaifangContent: '',
                    yishengjianyiContent: '',
                    huafeijine: '',
                    xiacijiuzhenTime: '',
                    bingliTypes: '',
                    insertTime: '',
                },
                bingliTypesOptions : [],
                bingrenOptions : [],
                yishengOptions : [],
                rules: {
                   bingliUuidNumber: [
                              { required: true, message: '病例编号不能为空', trigger: 'blur' },
                          ],
                   bingrenId: [
                              { required: true, message: '病人不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   yishengId: [
                              { required: true, message: '医生不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   jianchaTime: [
                              { required: true, message: '检查时间不能为空', trigger: 'blur' },
                          ],
                   bingrenzishuContent: [
                              { required: true, message: '病人自述不能为空', trigger: 'blur' },
                          ],
                   jianchajieguoContent: [
                              { required: true, message: '检查结果不能为空', trigger: 'blur' },
                          ],
                   yishengkaifangContent: [
                              { required: true, message: '医生开方不能为空', trigger: 'blur' },
                          ],
                   yishengjianyiContent: [
                              { required: true, message: '医生建议不能为空', trigger: 'blur' },
                          ],
                   huafeijine: [
                              { required: true, message: '花费金额不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]{0,6}(\.[0-9]{1,2})?$/,
                                  message: '只允许输入整数6位,小数2位的数字',
                                  trigger: 'blur'
                              }
                          ],
                   xiacijiuzhenTime: [
                              { required: true, message: '下次就诊时间不能为空', trigger: 'blur' },
                          ],
                   bingliTypes: [
                              { required: true, message: '状态不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   insertTime: [
                              { required: true, message: '录入时间不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");


            if (this.role != "管理员"){
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=bingli_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.bingliTypesOptions = data.data.list;
                    }
                });

         this.$http({
             url: `bingren/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.bingrenOptions = data.data.list;
            }
         });
         this.$http({
             url: `yisheng/page?page=1&limit=100`,
             method: "get"
         }).then(({ data }) => {
             if (data && data.code === 0) {
                this.yishengOptions = data.data.list;
            }
         });

        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            bingrenChange(id){
                this.$http({
                    url: `bingren/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.bingrenForm = data.data;
                    }
                });
            },
            yishengChange(id){
                this.$http({
                    url: `yisheng/info/`+id,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.yishengForm = data.data;
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `bingli/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                        _this.bingrenChange(data.data.bingrenId)
                        _this.yishengChange(data.data.yishengId)
                        _this.ruleForm.bingrenzishuContent = _this.ruleForm.bingrenzishuContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                        _this.ruleForm.jianchajieguoContent = _this.ruleForm.jianchajieguoContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                        _this.ruleForm.yishengkaifangContent = _this.ruleForm.yishengkaifangContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                        _this.ruleForm.yishengjianyiContent = _this.ruleForm.yishengjianyiContent.replaceAll("src=\"upload/","src=\""+this.$base.url+"upload/");
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.ruleForm.bingrenzishuContent = this.ruleForm.bingrenzishuContent.replaceAll(this.$base.url,"");
                        this.ruleForm.jianchajieguoContent = this.ruleForm.jianchajieguoContent.replaceAll(this.$base.url,"");
                        this.ruleForm.yishengkaifangContent = this.ruleForm.yishengkaifangContent.replaceAll(this.$base.url,"");
                        this.ruleForm.yishengjianyiContent = this.ruleForm.yishengjianyiContent.replaceAll(this.$base.url,"");
                        this.$http({
                            url:`bingli/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.bingliCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.bingliCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}</style>

